let form = document.getElementById("bookingForm");

document.addEventListener("DOMContentLoaded", function(){

  // ✅ PLAN SELECT
  window.openForm = function(plan, btn){
    document.getElementById("plan").value = plan;
    document.getElementById("summaryPlan").innerText = plan;

    document.querySelectorAll(".package-card")
      .forEach(c => c.classList.remove("active-card"));

    btn.closest(".package-card").classList.add("active-card");
  };

  let pickup = document.getElementById("pickup");


  // AUTO DELIVERY
if(pickup){
  pickup.addEventListener("change", function(){

    let d = new Date(this.value);
    d.setDate(d.getDate() + 2);

    let formatted =
      d.getFullYear() + "-" +
      String(d.getMonth()+1).padStart(2,'0') + "-" +
      String(d.getDate()).padStart(2,'0') + "T" +
      String(d.getHours()).padStart(2,'0') + ":" +
      String(d.getMinutes()).padStart(2,'0');

    document.getElementById("delivery").value = formatted;

    updateSummary();
    checkForm();

    

  });
}

  // ENABLE BUTTON
  function checkForm(){
  let valid = true;

  document.querySelectorAll("#bookingForm input[required], #bookingForm select[required]")
    .forEach(el=>{
      if(!el.value) valid = false;
    });

  document.getElementById("submitBtn").disabled = !valid;
}

  // UPDATE SUMMARY
function updateSummary(){
  document.getElementById("summaryPlan").innerText =
    document.getElementById("plan").value;

  document.getElementById("summaryName").innerText =
    document.getElementById("name").value;

  document.getElementById("summaryCar").innerText =
    document.getElementById("car").value;

  document.getElementById("summaryPickup").innerText =
    document.getElementById("pickup").value;

  document.getElementById("summaryDelivery").innerText =
    document.getElementById("delivery").value;
}
  // LISTENERS (NOW CORRECT)
  document.querySelectorAll("#bookingForm input:not([readonly]), #bookingForm select")
    .forEach(el => {
      el.addEventListener("input", function(){
        updateSummary();
        checkForm();
      });
    });
    function generateToken(){
  const random = Math.floor(10000 + Math.random() * 90000);
  return "AC-" + random;
}

  // SUBMIT
  if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const token = generateToken();

    this.reset();

    updateSummary();
    checkForm();

    document.getElementById("summaryToken").innerText = token;

    alert(`Booking Confirmed ✅\nYour Token No: ${token}`);

    let modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    modal.hide();
  });
  }
// ✅ CONTACT FORM SUCCESS
const contactForm = document.getElementById("contactForm");

if(contactForm){
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const successBox = document.getElementById("successMsg");

    successBox.classList.remove("d-none");

    this.reset();

    setTimeout(() => {
      successBox.classList.add("d-none");
    }, 3000);
  });
}
// ===== FADE-IN ON SCROLL =====
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));
// ============ CONTACT FORM ============


});
