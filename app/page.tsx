<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Sweet Bakes - ร้านขายเบเกอรี่</title>
  <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- SweetAlert2 CDN -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <style>
    :root {
      --bg-cream: #fffdf9;
      --primary-orange: #d97706;
      --dark-brown: #451a03;
      --accent-orange: #fbbf24;
      --border-color: #fde68a;
      --text-main: #292524;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Kanit', sans-serif;
    }

    body {
      background-color: var(--bg-cream);
      color: var(--text-main);
      padding-bottom: 80px;
    }

    /* HEADER */
    .header {
      background: var(--bg-cream);
      border-bottom: 1px solid #fef3c7;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 22px;
      font-weight: 700;
      color: var(--dark-brown);
      cursor: pointer;
      text-decoration: none;
    }

    .brand-logo i {
      color: var(--primary-orange);
      font-size: 24px;
    }

    .nav-menu {
      display: flex;
      gap: 30px;
      list-style: none;
      font-size: 15px;
      font-weight: 400;
    }

    .nav-menu a {
      text-decoration: none;
      color: var(--text-main);
      transition: color 0.2s;
    }

    .nav-menu a:hover {
      color: var(--primary-orange);
    }

    .btn-cart-nav {
      background: var(--primary-orange);
      color: white;
      border: none;
      padding: 10px 22px;
      border-radius: 30px;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
      transition: background 0.2s;
    }

    .btn-cart-nav:hover {
      background: #b45309;
    }

    /* CONTAINER & SECTIONS */
    .container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 24px;
    }

    .section-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--dark-brown);
      margin-bottom: 8px;
    }

    .section-desc {
      font-size: 15px;
      color: #78716c;
    }

    /* PRODUCTS GRID */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 30px;
    }

    .product-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid var(--border-color);
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s;
    }

    .product-card:hover {
      transform: translateY(-5px);
    }

    .product-img-container {
      position: relative;
      width: 100%;
      height: 220px;
    }

    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(255, 255, 255, 0.9);
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
      color: var(--dark-brown);
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }

    .product-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    }

    .product-name {
      font-size: 18px;
      font-weight: 600;
      color: var(--dark-brown);
      margin-bottom: 12px;
    }

    .product-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
    }

    .product-price {
      font-size: 20px;
      font-weight: 700;
      color: var(--primary-orange);
    }

    .btn-add-cart {
      background: var(--dark-brown);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .btn-add-cart:hover {
      background: var(--primary-orange);
    }

    /* CART DRAWER */
    .cart-drawer {
      position: fixed;
      top: 0;
      right: -380px;
      width: 350px;
      height: 100%;
      background: white;
      box-shadow: -5px 0 25px rgba(0,0,0,0.1);
      z-index: 2000;
      transition: right 0.3s ease;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    .cart-drawer.open {
      right: 0;
    }

    .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f3f4f6;
      padding-bottom: 15px;
      margin-bottom: 15px;
    }

    .cart-items-list {
      flex: 1;
      overflow-y: auto;
    }

    .cart-item {
      display: flex;
      gap: 12px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dashed #e5e7eb;
      align-items: center;
    }

    .cart-item-img {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      object-fit: cover;
    }

    .cart-footer {
      border-top: 1px solid #f3f4f6;
      padding-top: 15px;
    }

    .checkout-btn {
      width: 100%;
      background: var(--primary-orange);
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
      margin-top: 12px;
      transition: background 0.2s;
    }

    .checkout-btn:hover {
      background: #b45309;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header class="header">
    <div class="header-container">
      <a class="brand-logo" href="#">
        <i class="fa-solid fa- croissant"></i>
        <span>Sweet Bakes</span>
      </a>
      <ul class="nav-menu">
        <li><a href="#" style="color: var(--primary-orange); font-weight: 500;">หน้าแรก</a></li>
        <li><a href="#">เมนูทั้งหมด</a></li>
        <li><a href="#">เกี่ยวกับเรา</a></li>
        <li><a href="#">ติดต่อ</a></li>
      </ul>
      <button class="btn-cart-nav" onclick="toggleCart()">
        <i class="fa-solid fa-basket-shopping"></i> ตะกร้าสินค้า (<span id="cartCount">0</span>)
      </button>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="container">
    <div class="section-header">
      <h2 class="section-title">เมนูขายดีประจำสัปดาห์</h2>
      <p class="section-desc">เมนูยอดฮิตที่ลูกค้าของเราชื่นชอบมากที่สุด</p>
    </div>

    <div class="products-grid" id="bakeryProductsGrid">
      <!-- ข้อมูลสินค้าจะถูกแสดงผลด้วย JavaScript ด้านล่าง -->
    </div>
  </main>

  <!-- CART DRAWER -->
  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-header">
      <h3 style="color: var(--dark-brown);"><i class="fa-solid fa-basket-shopping"></i> ตะกร้าสินค้า</h3>
      <i class="fa-solid fa-xmark" style="cursor: pointer; font-size: 18px;" onclick="toggleCart()"></i>
    </div>
    <div class="cart-items-list" id="cartItemsList">
      <p style="text-align: center; color: #a8a29e; margin-top: 30px;">ไม่มีสินค้าในตะกร้า</p>
    </div>
    <div class="cart-footer">
      <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 16px; color: var(--dark-brown);">
        <span>ราคารวมทั้งหมด:</span>
        <span id="cartTotal" style="color: var(--primary-orange);">฿0</span>
      </div>
      <button class="checkout-btn" onclick="checkout()">สั่งซื้อสินค้า</button>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    let cart = [];

    // รายการสินค้าเบเกอรีตามหน้าจอตัวอย่าง
    const bakeryItems = [
      {
        id: 1,
        name: "Fresh Croissant",
        price: 85,
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
      },
      {
        id: 2,
        name: "Strawberry Shortcake",
        price: 140,
        badge: "Fresh Daily",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
      },
      {
        id: 3,
        name: "Sourdough Bread",
        price: 120,
        badge: "Artisan",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
      }
    ];

    // โหลดสินค้าแสดงผลหน้าเว็บ
    document.addEventListener("DOMContentLoaded", function() {
      const grid = document.getElementById('bakeryProductsGrid');
      grid.innerHTML = bakeryItems.map(item => `
        <div class="product-card">
          <div class="product-img-container">
            <span class="product-badge">${item.badge}</span>
            <img src="${item.image}" class="product-img" alt="${item.name}">
          </div>
          <div class="product-body">
            <div class="product-name">${item.name}</div>
            <div class="product-footer">
              <span class="product-price">฿${item.price}</span>
              <button class="btn-add-cart" onclick="addToCart('${item.name}', ${item.price}, '${item.image}')">
                <i class="fa-solid fa-plus"></i> เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
        </div>
      `).join('');
    });

    // ฟังก์ชันเพิ่มลงตะกร้าพร้อม Toast แจ้งเตือน
    function addToCart(name, price, image) {
      cart.push({ name, price, image });
      updateCartUI();

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      });
      Toast.fire({
        icon: 'success',
        title: 'เพิ่ม ' + name + ' ลงตะกร้าแล้ว'
      });
    }

    // อัปเดตหน้าต่างตะกร้าสินค้า
    function updateCartUI() {
      document.getElementById('cartCount').innerText = cart.length;
      const listContainer = document.getElementById('cartItemsList');

      if (cart.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: #a8a29e; margin-top: 30px;">ไม่มีสินค้าในตะกร้า</p>';
        document.getElementById('cartTotal').innerText = '฿0';
        return;
      }

      let total = 0;
      listContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
          <div class="cart-item">
            <img src="${item.image}" class="cart-item-img">
            <div style="flex: 1;">
              <div style="font-size: 14px; font-weight: 500; color: var(--dark-brown);">${item.name}</div>
              <div style="color: var(--primary-orange); font-weight: bold; font-size: 14px;">฿${item.price}</div>
            </div>
            <i class="fa-solid fa-trash" style="color: #ef4444; cursor: pointer;" onclick="removeFromCart(${index})"></i>
          </div>
        `;
      }).join('');

      document.getElementById('cartTotal').innerText = `฿${total}`;
    }

    // ลบสินค้าออกจากตะกร้า
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCartUI();
    }

    // เปิดปิด Drawer ตะกร้าสินค้า
    function toggleCart() {
      document.getElementById('cartDrawer').classList.toggle('open');
    }

    // ฟังก์ชันสั่งซื้อ (เชื่อมต่อ Google Sheets หรือจำลอง)
    function checkout() {
      if (cart.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'ตะกร้าสินค้าว่างเปล่า',
          text: 'กรุณาเลือกเบเกอรีก่อนทำการสั่งซื้อครับ',
          confirmButtonColor: '#d97706'
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'สั่งซื้อสำเร็จ! 🥐',
        text: 'ระบบได้รับออเดอร์เบเกอรีของคุณเรียบร้อยแล้ว',
        confirmButtonColor: '#d97706',
        timer: 2500
      });

      cart = [];
      updateCartUI();
      toggleCart();
    }
  </script>
</body>
</html>
