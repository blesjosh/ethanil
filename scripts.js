document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const story = document.getElementById('story').value;

    if (name.trim() !== "" && story.trim() !== "") {
        const newTestimonial = document.createElement('p');
        newTestimonial.classList.add('testimonial-item'); 
        newTestimonial.innerHTML = `
            <strong>${name}:</strong>
            <span>${story}</span>
        `;
        document.getElementById('testimonials').appendChild(newTestimonial);
        document.getElementById('storyForm').reset();
    } else {
        alert("Please fill out both the name and story fields.");
    }
});