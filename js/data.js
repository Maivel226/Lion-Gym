function data() {
    let weight = document.querySelector('input[name="weight"]').value;
    let height = document.querySelector('input[name="height"]').value;
    
    if (!weight || !height) {
        alert("Please enter both weight and height.");
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (weight >= 50 && weight <= 80 || height >= 150 && height <= 180) {
        document.getElementById("50--=>80").style.display = "block";
        document.getElementById("80--=>95").style.display = "none";
        document.getElementById("95+").style.display = "none";
    } else if (weight > 80 && weight <= 95 || height > 180 && height <= 195) {
        document.getElementById("50--=>80").style.display = "none";
        document.getElementById("80--=>95").style.display = "block";
        document.getElementById("95+").style.display = "none";
    } else if (weight > 95 || height >195 ) {
        document.getElementById("50--=>80").style.display = "none";
        document.getElementById("80--=>95").style.display = "none";
        document.getElementById("95+").style.display = "block";
    } else {
        alert("Invalid weight range.");
    }
}
