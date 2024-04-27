const all_filterbtns = document.querySelectorAll(".filterbtn");
const all_filterable_cards = document.querySelectorAll(".filterable-card");
all_filterbtns.forEach((each_filterbtn) => {
  each_filterbtn.addEventListener("click", (e) => {
    // ======================================== remove the existing class activefilterbtn class from filterbtns ========================================
    let active_filterbtn = document.querySelector(".active-filterbtn");
    active_filterbtn.classList.remove("active-filterbtn");
    // ======================================== add the activefilterbtns class clicked on the particular btn ========================================
    e.target.classList.add("active-filterbtn");
    all_filterable_cards.forEach((each_filterable_card)=>{
        // ======================================== if the each filterable cards & each filterable btns custom attribute's values are same or the filterbtns custom attributes are set to all then show all the filtered cards otherwise show the categorised cards details & hide other cards ========================================
        if(each_filterable_card.dataset.category === each_filterbtn.dataset.category || each_filterbtn.dataset.category === "all") {
            each_filterable_card.classList.remove("showhide-filtercard");
        }
        else {
            each_filterable_card.classList.add("showhide-filtercard");
        }
    })
  });
});
