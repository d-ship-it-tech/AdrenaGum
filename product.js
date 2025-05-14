<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.buy').forEach(button => {
      button.addEventListener('click', function () {
        window.location.href = "add to cart.html";
      });
    });
  });
</script>
