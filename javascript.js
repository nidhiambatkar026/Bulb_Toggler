        const imgbulb = document.getElementById('bulb');
        const click_btn = document.getElementById('button_on');
        const click_btn_2 = document.getElementById('button_off');
        const box_back = document.getElementById('container');
        const heading_1 = document.getElementById('heading');
        function on(){
            imgbulb.src = 'bulb_on.png';
            click_btn.style.background = '#ffff1a';
            box_back.style.background = '#fff';
            heading_1.style.color='#000';
        }
        function off(){
            imgbulb.src = 'bulb_off.png';
            box_back.style.background = 'grey';
            click_btn.style.background = 'none';
            heading_1.style.color = '#fff';
        }