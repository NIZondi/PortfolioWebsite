//scroll sections
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let  navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                //active section for animation
                sec.classList.add('show-animate');
            })
        }else{
            sec.classList.remove('show-animate');

        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//for contacting me


  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Show success message using SweetAlert2
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thanks for contacting me. I’ll get back to you soon.',
            confirmButtonColor: '#3085d6'
          });

          // Reset the form
          form.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Try again.',
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Could not connect. Please try again later.',
        });
        console.error("Error:", error);
      });
  });

