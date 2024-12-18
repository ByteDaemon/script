for (let i = 0; i < 12; i++) {
    let rows = document.querySelectorAll("table tr");

    rows.forEach(row => {
        let radios = row.querySelectorAll('input[type="radio"]');

        if (radios.length >= 1) {
            radios[0].checked = true;
        }
    });

    document.getElementById('btnSaveFeedBack').click();
}


