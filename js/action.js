
  function openAllWraps() {
    const wraps = document.querySelectorAll(".wrap");
    wraps.forEach(function(wrap) {
      wrap.style.display = "block";
    });
  }
  function closeAllWraps() {
    const wraps = document.querySelectorAll(".wrap");
    wraps.forEach(function(wrap) {
      wrap.style.display = "none";
    });
  }
  function openbooklist() {
    const books = document.querySelectorAll(".book-list");
    books.forEach(function(wrap) {
      wrap.style.display = "block";
    });
  }
  function closebooklist() { const books = document.querySelectorAll(".book-list");
    books.forEach(function(wrap) {
      wrap.style.display = "none";
    });}
    function addBook() {
      // Lấy dữ liệu từ các input
      const bookID = document.querySelector("input[name='book_id']").value;
      const bookName = document.querySelector("input[name='book_name']").value;
      const authorName = document.querySelector("input[name='author_name']").value;
      const price = document.querySelector("input[name='price']").value;
    
      // Kiểm tra dữ liệu hợp lệ
      if (!bookID || !bookName || !authorName || !price) {
        alert("Please fill in all fields!");
        return;
      }
    
      // Tạo dòng mới
      const table = document.querySelector(".book-list table");
      const newRow = table.insertRow(-1); // Thêm cuối bảng
    
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
      const cell4 = newRow.insertCell(3);
    
      cell1.textContent = bookID;
      cell2.textContent = bookName;
      cell3.textContent = authorName;
      cell4.textContent = `$${parseFloat(price).toFixed(2)}`;
    
      // Xóa dữ liệu trong form
      document.querySelector("input[name='book_id']").value = "";
      document.querySelector("input[name='book_name']").value = "";
      document.querySelector("input[name='author_name']").value = "";
      document.querySelector("input[name='price']").value = "";
    
      // Hiện danh sách và ẩn form
      openbooklist();
      closeAllWraps();
    }
    function clearBookList() {
      const table = document.querySelector(".book-list table");
    
      // Xóa tất cả các hàng, trừ hàng tiêu đề (header)
      const rowCount = table.rows.length;
      for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
      }
    
      // Ẩn bảng nếu muốn
      // closebooklist();
    }
        