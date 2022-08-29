# CHROME EXTENSION

### CHROME EXTENSION là gì ?

-  Chrome extension là tiện ích mở rộng cho trình duyệt, là những extension được tạo ra bằng `HTML/CSS` và `Javascript` lưu lại trong trình duyệt Chrome.

VD:

-  AdBlock hỗ trợ việc chặn quảng cáo trên hầu hết các website.
-  Google dịch hỗ trợ dịch từ tiếng Anh

### Cấu hình manifest.json cho extension

VD:

```
{
   "name": "Tên Extension",
   "description": "Mô tả",
   "version": "1.0",
   "browser_action": {
     "default_icon": "logo.png",
     "default_popup": "index.html"
   },
   "permissions": [
     "storage"
   ],
   "manifest_version": 2,
   "content_scripts":[
      {
        "matches": "url",
        "scripts": "file.js",
        "css": "file.css"
      }
   ]
 }

```

### Thuộc tính của file config:

-  `manifest_version`: version của Google của extension hiện tại
-  `name`: tên của extension
-  `version`: version của extension
-  `icons`: icon muốn hiển thị lên trình duyệt
-  `description`: mô tả extension
-  `browser_action`: cấu hình dành cho tất cả các page, bao gồm tooltip, icon,popup page khi người dùng click vào icon
-  `content_scripts`: dùng để inject các file js, css vào trang web
   -  `matches`: chỉ định những website được inject các file,
   -  `scripts`: các file js được inject vào
   -  `css`: các file css được inject vào
