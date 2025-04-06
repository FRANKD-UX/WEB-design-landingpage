// Toggle FAQ answers
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  });

  // Form submission with EmailJS
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show loading indicator
      submitBtn.innerHTML = 'Sending... <span class="loading"></span>';
      submitBtn.disabled = true;

      // Collect form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        package: document.getElementById("package").value,
        message: document.getElementById("message").value,
        to_email: "frankdafrica@gmail.com", // Your email address
      };

      // Send the form using EmailJS
      sendEmail(formData);
    });
  }

  // EmailJS implementation
  function sendEmail(data) {
    // EmailJS public key - you would need to replace this with your actual EmailJS public key
    const publicKey = "8KGbl2Jf4oA7TDc3_";

    // EmailJS service ID - you would need to replace this with your actual EmailJS service ID
    const serviceID = "service_j7zhytj";

    // EmailJS template ID - you would need to replace this with your actual EmailJS template ID
    const templateID = "template_xnb1lfb";

    // For demo purposes, we'll simulate a successful submission
    // In a real implementation, you would use EmailJS's sendForm method

    // Simulating network request delay
    setTimeout(() => {
      // Success scenario
      submitBtn.innerHTML = "Send Message";
      submitBtn.disabled = false;
      formStatus.className = "form-status success";
      formStatus.textContent =
        "Thank you! Your message has been sent successfully. We will get back to you shortly.";
      contactForm.reset();

      
      emailjs.send(serviceID, templateID, data, publicKey)
        .then(() => {
          submitBtn.innerHTML = 'Send Message';
          submitBtn.disabled = false;
          formStatus.className = 'form-status success';
          formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
          contactForm.reset();
        })
        .catch((error) => {
          submitBtn.innerHTML = 'Send Message';
          submitBtn.disabled = false;
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Oops! Something went wrong. Please try again or contact us directly.';
          console.error('Form submission error:', error);
        });
      */

      // Log the data that would be sent to the email
      console.log("Form data to be sent to", data.to_email);
      console.log("Form data:", data);
    }, 1500);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
