document.addEventListener('DOMContentLoaded', () => {
        
    // clock function
    function UpdateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US');

        const clockElement = document.querySelector('.clock');
        if (clockElement) {
            clockElement.innerText = timeString;
        }
    }

    UpdateClock();
    setInterval(UpdateClock, 1000);

    //draggable windows
    const allWindows = document.querySelectorAll('.window');

    allWindows.forEach(win => {
        const header = win.querySelector('.window-header')
        if (!header) return;

        let isDragging = false;
        let currentX = 0;
        let currentY = 0;
        let initialX = 0;
        let initialY = 0;
        let xOffset = 0;
        let yOffset = 0;
        
        header.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);

        function dragStart(e) {
            allWindows.forEach(w => w.style.zIndex = "100");
            win.style.zIndex = "1000";

            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target == header || header.contains(e.target)) {
                isDragging = true
                header.style.cursor = 'grabbing';
            }
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();

                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                win.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
            }
        }

        function dragEnd() {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            header.style.cursor = 'grab';
        }
    });

    //doubleclick
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('dblclick', () => {
            const targetWindow = document.getElementById('window-1');
            if (targetWindow) {
                targetWindow.style.display = 'block';
                targetWindow.style.zIndex = "1000";
            }
        });
    });
});