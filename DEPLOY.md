# Hướng Dẫn Deploy CV lên GitHub Pages

## Các Bước Thực Hiện

### 1. Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com)
2. Click nút **New** để tạo repository mới
3. Đặt tên repository (ví dụ: `professional-cv`)
4. Chọn **Public** (bắt buộc cho GitHub Pages miễn phí)
5. Click **Create repository**

### 2. Kết Nối Local Repository với GitHub

Mở terminal và chạy các lệnh sau:

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit: Professional CV"

# Thêm remote GitHub (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### 3. Cấu Hình GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** (Cài đặt)
3. Click **Pages** ở menu bên trái
4. Trong phần **Source**, chọn **GitHub Actions**
5. **Xong!** Workflow sẽ tự động chạy

### 4. Truy Cập Website

Sau khi workflow chạy xong (khoảng 2-3 phút), CV của bạn sẽ có thể truy cập tại:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Cập Nhật CV

Mỗi khi bạn muốn cập nhật CV:

```bash
# Chỉnh sửa files
# Sau đó commit và push

git add .
git commit -m "Update CV content"
git push
```

Website sẽ tự động cập nhật sau vài phút!

## Kiểm Tra Deployment

- Vào tab **Actions** trên GitHub để xem trạng thái deployment
- Nếu có lỗi, bạn có thể xem chi tiết trong logs

## Build Local (Tùy Chọn)

Để kiểm tra static export trên máy local:

```bash
npm run build
```

Các files sẽ được tạo trong thư mục `out/`

## Troubleshooting

### Lỗi 404 khi truy cập trang
- Đảm bảo đã chọn **GitHub Actions** trong Settings > Pages
- Kiểm tra workflow đã chạy thành công trong tab Actions

### Images không hiển thị
- Đảm bảo tất cả images trong `public/` đã được commit
- Kiểm tra đường dẫn images trong code

### CSS không áp dụng
- Kiểm tra basePath đã được cấu hình đúng trong `next.config.mjs`
