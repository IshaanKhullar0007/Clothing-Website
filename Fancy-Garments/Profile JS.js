//     const tabBtn=document.querySelectorAll(".tab");
//     const tab = document.querySelectorAll(".tabShow");

//     function tabs(panelIndex) {
//         tab.forEach(function(node) {
//             node.style.display = "none";
//         });
//         tab[panelIndex].style.display = "block";
//     }
//     tabs(0);
//      $(".tab").click(function(){
//     $(this).addClass("active").siblings().removeClass("active");
// })


//change - 2
// Get all tab elements
// const tabs = document.querySelectorAll('.tab');

// // Get all tab content elements
// const tabContents = document.querySelectorAll('.tabShow');

// // Loop through each tab
// tabs.forEach((tab, index) => {
//     // Add click event listener to each tab
//     tab.addEventListener('click', () => {
//         // Remove 'active' class from all tabs
//         tabs.forEach((t) => t.classList.remove('active'));
//         // Add 'active' class to the clicked tab
//         tab.classList.add('active');
//         // Hide all tab content
//         tabContents.forEach((content) => content.style.display = 'none');
//         // Display the corresponding tab content based on the clicked tab index
//         tabContents[index].style.display = 'block';
//     });
// });




// Get all tab elements
const tabs = document.querySelectorAll('.tab');

// Get all tab content elements
const tabContents = document.querySelectorAll('.tabShow');

// Get all submit buttons
const submitButtons = document.querySelectorAll('.btn');

// Loop through each tab
tabs.forEach((tab, index) => {
    // Add click event listener to each tab
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach((t) => t.classList.remove('active'));
        // Add 'active' class to the clicked tab
        tab.classList.add('active');
        // Hide all tab content
        tabContents.forEach((content) => content.style.display = 'none');
        // Display the corresponding tab content based on the clicked tab index
        tabContents[index].style.display = 'block';
    });
});

// Manually set the 'active' class for the Profile tab and show its content
tabs.forEach((tab, index) => {
    if (index === 0) {
        tab.classList.add('active');
    } else {
        tab.classList.remove('active');
    }
});
tabContents.forEach((content, index) => {
    if (index === 0) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});

// Loop through each submit button
submitButtons.forEach((button) => {
    // Add click event listener to each submit button
    button.addEventListener('click', () => {
        // You can perform an action here when the submit button is clicked
        // For example, you can update user information
        console.log('Submit button clicked!');
        // You can add your logic to update user information here
    });
});
