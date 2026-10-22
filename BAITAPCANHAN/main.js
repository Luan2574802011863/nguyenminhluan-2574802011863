/* =========================================================
     BÀI TẬP MỞ RỘNG: thêm Đăng nhập / Đăng ký vào ứng dụng
     Cửa Hàng Online mà em đã hoàn thiện ở bài trước.

     Phần sản phẩm / giỏ hàng bên dưới (PHẦN B) đã có sẵn đầy
     đủ, giữ nguyên không cần sửa. Nhiệm vụ của em là hoàn
     thiện 5 hàm còn thiếu ở PHẦN A - đánh dấu TODO 1 đến TODO 5.

     Làm lần lượt từng TODO, test lại ngay sau mỗi bước (nhớ
     tải lại trang F5 sau khi lưu file để chạy code mới).
     ========================================================= */

  /* =========================================================
     PHẦN A: ĐĂNG NHẬP / ĐĂNG KÝ (cần hoàn thiện)
     ========================================================= */

  // Danh sách tài khoản - lưu trong mảng (mất khi tải lại trang
  // vì đây chỉ là JavaScript thuần, không có server/database)
  // KHÔNG cần sửa phần dữ liệu này
  let danhSachTaiKhoan = [
    { taiKhoan: "khach1", matKhau: "123456" }
  ];

  // Tài khoản đang đăng nhập. null nghĩa là chưa đăng nhập - KHÔNG cần sửa
  let taiKhoanDangNhap = null;

  // Tham chiếu DOM - KHÔNG cần sửa phần này
  const oTaiKhoan = document.getElementById("oTaiKhoan");
  const oMatKhau = document.getElementById("oMatKhau");
  const oThongBaoLoi = document.getElementById("thongBaoLoi");
  const oManHinhDangNhap = document.getElementById("manHinhDangNhap");
  const oManHinhCuaHang = document.getElementById("manHinhCuaHang");
  const oTenDangNhap = document.getElementById("tenDangNhap");

  /* =========================================================
     TODO 1: Hàm timTaiKhoan(taiKhoan)
     - Dùng vòng lặp for duyệt qua danhSachTaiKhoan
     - Nếu danhSachTaiKhoan[i].taiKhoan === taiKhoan thì
       return danhSachTaiKhoan[i] (trả về cả object tài khoản)
     - Nếu duyệt hết mảng mà không tìm thấy thì return null
     (Y hệt cách viết hàm timSanPham() ở bài trước)
     ========================================================= */
  function timTaiKhoan(taiKhoan) {
    // TODO 1: viết code ở đây
  for (let i = 0; i < danhSachTaiKhoan.length; i++) {
    if (danhSachTaiKhoan[i].taiKhoan === taiKhoan) {
      return danhSachTaiKhoan[i];
    }

  }
  return null;
}

  /* =========================================================
     TODO 2: Hàm dangKy()
     Được gọi khi bấm nút "Đăng ký".
     - Đọc giá trị 2 ô input: oTaiKhoan.value, oMatKhau.value
     - Dùng timTaiKhoan(taiKhoan) để kiểm tra tài khoản đã tồn
       tại chưa. Nếu khác null (đã tồn tại):
         + gán oThongBaoLoi.className = "thong-bao loi"
         + gán oThongBaoLoi.textContent = "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập."
         + return (dừng hàm, không đăng ký nữa)
     - Nếu chưa tồn tại:
         + push object { taiKhoan: taiKhoan, matKhau: matKhau }
           vào mảng danhSachTaiKhoan
         + gán oThongBaoLoi.className = "thong-bao thanh-cong"
         + gán oThongBaoLoi.textContent = "Đăng ký thành công! Bây giờ hãy đăng nhập."
     ========================================================= */
  function dangKy() {
    // TODO 2: viết code ở đây
    // Lấy dữ liệu từ ô input
  const taiKhoan = oTaiKhoan.value;
  const matKhau = oMatKhau.value;
  // Kiểm tra tài khoản đã tồn tại chưa
  const tk = timTaiKhoan(taiKhoan);
  if (tk !== null) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent =
      "Tài khoản đã tồn tại, vui lòng chọn tên khác hoặc đăng nhập.";
    return;
  }
  // Tạo tài khoản mới
  const taiKhoanMoi = {
    taiKhoan: taiKhoan,
    matKhau: matKhau
  };
  // Thêm vào mảng
  danhSachTaiKhoan.push(taiKhoanMoi);

  // Hiển thị thông báo thành công
  oThongBaoLoi.className = "thong-bao thanh-cong";
  oThongBaoLoi.textContent =
    "Đăng ký thành công! Bây giờ hãy đăng nhập.";
}
  /* =========================================================
     TODO 3: Hàm dangNhap()
     Được gọi khi bấm nút "Đăng nhập".
     - Đọc giá trị 2 ô input: oTaiKhoan.value, oMatKhau.value
     - Dùng timTaiKhoan(taiKhoan) để tìm tài khoản, lưu vào 1 biến
     - Nếu không tìm thấy (null) HOẶC mật khẩu không khớp
       (tk.matKhau !== matKhau):
         + gán oThongBaoLoi.className = "thong-bao loi"
         + gán oThongBaoLoi.textContent = "Sai tài khoản hoặc mật khẩu."
         + return
     - Nếu đúng:
         + gán taiKhoanDangNhap = taiKhoan
         + xóa trắng 2 ô input, xóa trắng oThongBaoLoi.textContent
         + gọi hienThiManHinh() để chuyển sang màn hình cửa hàng
     ========================================================= */
  function dangNhap() {
    // TODO 3: viết code ở đây
    // Lấy dữ liệu từ ô input
  const taiKhoan = oTaiKhoan.value;
  const matKhau = oMatKhau.value;
  // Tìm tài khoản
  const tk = timTaiKhoan(taiKhoan);
  // Kiểm tra tài khoản hoặc mật khẩu
  if (tk === null || tk.matKhau !== matKhau) {
    oThongBaoLoi.className = "thong-bao loi";
    oThongBaoLoi.textContent =
      "Sai tài khoản hoặc mật khẩu.";
    return;
  }
  // Đăng nhập thành công
  taiKhoanDangNhap = taiKhoan;
  // Xóa input
  oTaiKhoan.value = "";
  oMatKhau.value = "";
  // Xóa thông báo
  oThongBaoLoi.textContent = "";
  // Hiển thị màn hình cửa hàng
  hienThiManHinh();
}


  /* =========================================================
     TODO 4: Hàm dangXuat()
     Được gọi khi bấm nút "Đăng xuất".
     - Gán taiKhoanDangNhap = null
     - Gọi hienThiManHinh() để quay lại màn hình đăng nhập
     ========================================================= */
  function dangXuat() {
    // TODO 4: viết code ở đây
  // Không còn tài khoản đăng nhập
  taiKhoanDangNhap = null;
  // Quay lại màn hình đăng nhập
  hienThiManHinh();
}


  /* =========================================================
     TODO 5: Hàm hienThiManHinh()
     Ẩn/hiện 2 khối màn hình dựa vào biến taiKhoanDangNhap.
     - Nếu taiKhoanDangNhap === null (chưa đăng nhập):
         + oManHinhDangNhap.style.display = "block"
         + oManHinhCuaHang.style.display = "none"
     - Ngược lại (đã đăng nhập):
         + oManHinhDangNhap.style.display = "none"
         + oManHinhCuaHang.style.display = "block"
         + oTenDangNhap.textContent = taiKhoanDangNhap
     ========================================================= */
  function hienThiManHinh() {
    // TODO 5: viết code ở đây
    // Chưa đăng nhập
  if (taiKhoanDangNhap === null) {
    oManHinhDangNhap.style.display = "block";
    oManHinhCuaHang.style.display = "none";

  }
  // Đã đăng nhập
  else {
    oManHinhDangNhap.style.display = "none";
    oManHinhCuaHang.style.display = "block";
    oTenDangNhap.textContent = taiKhoanDangNhap;
  }
}

  /* =========================================================
     PHẦN B: SẢN PHẨM VÀ GIỎ HÀNG (đã hoàn thiện, KHÔNG cần sửa)
     ========================================================= */
  let danhSachSanPham = [
    { id: "SP001", ten: "Áo thun", gia: 150000 },
    { id: "SP002", ten: "Quần jean", gia: 350000 },
    { id: "SP003", ten: "Giày sneaker", gia: 500000 },
    { id: "SP004", ten: "Mũ lưỡi trai", gia: 80000 },
    { id: "SP005", ten: "Balo", gia: 250000 }
  ];

  let gioHang = [];

  const oBangSanPham = document.getElementById("bangSanPham");
  const oBangGioHang = document.getElementById("bangGioHang");
  const oTongTien = document.getElementById("tongTien");

  function dinhDangTien(soTien) {
    return soTien.toLocaleString("vi-VN") + "đ";
  }

  function timSanPham(id) {
    for (let i = 0; i < danhSachSanPham.length; i++) {
    if (danhSachSanPham[i].id === id) {
      return danhSachSanPham[i];
    }
  }
  return null;
}
  function hienThiSanPham() {
    let html = "";

  for (let i = 0; i < danhSachSanPham.length; i++) {
    let sp = danhSachSanPham[i];
    html += `
      <tr>
        <td>${sp.id}</td>
        <td>${sp.ten}</td>
        <td>${dinhDangTien(sp.gia)}</td>
        <td>
          <button onclick="themVaoGio('${sp.id}')">
            Thêm vào giỏ
          </button>
        </td>
      </tr>
    `;
  }

  oBangSanPham.innerHTML = html;
}

  function hienThiGioHang() {
    let html = "";
    let tongTien = 0;
    for (let i = 0; i < gioHang.length; i++) {
      let sp = gioHang[i];
      html += `
      <tr>
      <td>${sp.ten}</td>
      <td>${dinhDangTien(sp.gia)}</td>
      <td>
      <button onclick="xoaKhoiGio(${i})">Xóa</button>
        </td>
      </tr>
      `;
      tongTien += sp.gia;
    }
    oBangGioHang.innerHTML = html;
    oTongTien.textContent = dinhDangTien(tongTien);
  }
  function themVaoGio(id) {
    // Tìm sản phẩm
  let sp = timSanPham(id);
  // Nếu không tìm thấy thì dừng
  if (sp === null) {
    return;
  }
  // Thêm sản phẩm vào giỏ
  gioHang.push(sp);
  // Hiển thị lại giỏ hàng
  hienThiGioHang();
}
  function xoaKhoiGio(viTri) {
    // Xóa 1 sản phẩm tại vị trí viTri
  gioHang.splice(viTri, 1);

  // Hiển thị lại giỏ hàng
  hienThiGioHang();
}
  function thanhToan() {
    // Nếu giỏ hàng rỗng
  if (gioHang.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }
  // Tính tổng tiền
  let tongTien = 0;
  for (let i = 0; i < gioHang.length; i++) {
    tongTien += gioHang[i].gia;
  }
  // Thông báo thanh toán
  alert(
    "Thanh toán thành công!\nTổng tiền: " +
    dinhDangTien(tongTien)
  );
  // Xóa giỏ hàng
  gioHang = [];
  // Hiển thị lại giỏ hàng
  hienThiGioHang();
  }
  /* =========================================================
     HIỂN THỊ LẦN ĐẦU KHI TẢI TRANG - KHÔNG cần sửa
     ========================================================= */
  hienThiManHinh();
  hienThiSanPham();
  hienThiGioHang();