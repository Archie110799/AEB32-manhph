# Header

Phần đầu trang. Được định nghĩa thông qua thẻ <header>

# Footer

- Phần chân trang. Được định nghĩa thông qua thẻ <footer>
- Các thông tin đặt trong phần <footer> thường là:

* Thông tin liên hệ
* Chính sách
* Icon mạng xã hội
* Các quy định sử dụng dịch vụ
* Thông tin bản quyền
* Sitemap và các liên quan đến trang

# Nav

Thẻ này trình bày một phân đoạn của trang nó chứa các liên kết để điều hướng đến các trang của website. Đây là ví dụ về tạo một khối điều hướng:

<nav>
   <ul>
      <li><a href="#">Trang chủ</a></li>
      <li><a href="#">Dịch vụ</a></li>
      <li><a href="#">Giới thiệu</a></li>
   </ul>
</nav>

# article

là phần tử để bao bọc nội dung độc lập, nó có thể là một bài post của diễn đàn, một bài viết của trang, một bài báo, một bình luận ... hoặc bất kỳ một nội dung độc lập nào.

 <article> 
   <h1>Tiêu đề bài viết</h1> 
   <p>Các nội dung bài viết</p>
</article>

# section

Thẻ <section> dùng để phân chia một cách logic một trang, một article. Vậy Thẻ <section> dùng để chia nội dung trong một article. Ví dụ như trang chủ có thể có một <section> chứa thông tin giới thiệu về công ty, <section> khác chứa mục tin tức, <section> khác chứa thông tin liên hệ ...
Mỗi <section> là một khối xác định, thường nó có chứa các tiêu đề (h1 - h6) để phân chia <section>

<article>
   <h1>Chào mừng</h1>
   <section>
      <h1>Tiêu đề</h1>
      <p>Nội dung, hình ảnh ...</p>
   </section>
</article>

# aside

được hiểu như nội dung thứ cấp của phần nội dung chính của trang. <aside> thường dùng để biểu diễn sidebar. Khi một <aside> sử dụng trong <article> thì nội dung trong <aside> liên quan đến <article>

<article>
   <h1> Quà tặng cho mọi người </h1>
   <p> Trang web giúp bạn chọn và mua quà tặng </p>
   <aside>
      <p> Quà tặng được chuyển đến khách hàng trong khoảng 24h </p>
   </aside>
</article>
