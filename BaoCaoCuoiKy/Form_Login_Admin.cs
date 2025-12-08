using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using System.Collections;
using System.Security.Cryptography;

namespace BaoCaoCuoiKy
{
    public partial class Form_Login_Admin : Form
    {
        private Form_Main_Admin form_main_admin;
        public Form_Login_Admin()
        {
            InitializeComponent();
        }
        //private SqlConnection connection;
        //private SqlDataAdapter adapter;
        //private DataSet dataSet;
        //private SqlCommand command;

        private String maAD, matKhau;
        private XL_ADMIN admin = new XL_ADMIN();
        private Global global = new Global();
        private string connectionString;


        private void Form_Login_Admin_Load(object sender, EventArgs e)
        {
            connectionString = global.pathDatabase;
        }

        // button thoát
        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        // Hiển thị lại form hiện tại khi form_main_admin đóng
        private void Form_Main_Admin_FormClosed(object sender, FormClosedEventArgs e)
        {
            this.Show();
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            maAD = textBoxUsername.Text.Trim();
            matKhau = textBoxPassword.Text.Trim();

            if (admin.AdminExists(maAD))
            {
                if (checkMatKhau(maAD, matKhau))
                {
                    global.notify("Đăng nhập thành công");
                    textBoxPassword.Text = "";

                    form_main_admin = new Form_Main_Admin();
                    // Gắn sự kiện cho form mới khi đóng
                    form_main_admin.FormClosed += Form_Main_Admin_FormClosed;
                    this.Hide();
                    form_main_admin.ValueFromForm1 = textBoxUsername.Text;
                    form_main_admin.Show();
                }
                else
                {
                    global.notify("Mật khẩu không chính xác");
                }
            }
            else
            {
                global.notify("Không tồn tại admin");
            }
        }

        // Kiểm tra mật khẩu người dùng đăng nhập
        // Bước 1: lấy chuỗi mật khẩu (đã mã hóa) của admin theo mã đăng nhập.
        // Bước 2: băm mật khẩu người dùng vừa nhập bằng cùng thuật toán.
        // Bước 3: so sánh 2 chuỗi hash để xác định đúng/sai.
        private bool checkMatKhau(string MaAD, string mk)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string query = "SELECT MatKhau FROM ADMIN WHERE MaAD = @MaAD";
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@MaAD", MaAD);
                    object result = command.ExecuteScalar();
                    if (result == null)
                    {
                        return false;
                    }
                    string passwordFromDatabase = result.ToString();
                    // Nếu mật khẩu đang lưu chưa được băm (plain text) thì băm lại và cập nhật DB
                    // để về sau chỉ so sánh trên giá trị hash.
                    string hashedPassword = passwordFromDatabase;
                    if (!IsHashedPassword(passwordFromDatabase))
                    {
                        hashedPassword = HashPassword(passwordFromDatabase);
                        UpdatePasswordHash(MaAD, hashedPassword);
                    }

                    return VerifyPassword(mk, hashedPassword);
                }
            }
        }

        // Cập nhật mk hash cho Admin (dùng khi DB đang lưu mật khẩu plain)
        private void UpdatePasswordHash(string maAD, string hashedPassword)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string updateQuery = "UPDATE ADMIN SET MatKhau = @MatKhau WHERE MaAD = @MaAD";
                using (SqlCommand command = new SqlCommand(updateQuery, connection))
                {
                    command.Parameters.AddWithValue("@MaAD", maAD);
                    command.Parameters.AddWithValue("@MatKhau", hashedPassword);
                    command.ExecuteNonQuery();
                }

            }
        }

        private static string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                StringBuilder sb = new StringBuilder();
                foreach (byte b in hashBytes)
                {
                    sb.Append(b.ToString("x2"));
                }

                return sb.ToString();
            }
        }

        // So sánh hash của mk người dùng nhập vào với mk đã hash lưu trong DB
        static bool VerifyPassword(string enteredPassword, string hashedPasswordFromDatabase)
        {
            string enteredPasswordHash = HashPassword(enteredPassword);

            return string.Equals(enteredPasswordHash, hashedPasswordFromDatabase, StringComparison.OrdinalIgnoreCase);
        }

        // Check chuỗi có phải hash SHA256 dạng hex hay không (độ dài 64, chỉ gồm ký tự hex)
        private static bool IsHashedPassword(string password)
        {
            if (string.IsNullOrWhiteSpace(password) || password.Length != 64)
            {
                return false;
            }

            foreach (char c in password)
            {
                bool isHexDigit = (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
                if (!isHexDigit)
                {
                    return false;
                }
            }

            return true;
        }



    }
}
