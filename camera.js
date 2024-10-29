function openCam() {
    homeScreen.style.display = 'none'
    camera.style.display = 'block'

    async function openCamera() {
        const thevid = {
            video: true
        }
        try {
           const stream = await navigator.mediaDevices.getUserMedia(thevid)
           const videoElement = document.getElementById('camVid') 
           videoElement.srcObject = stream
        } catch (error) {
            console.error('Error:',error);
        }
    }
    openCamera()
}
document.getElementById('openCamBtn').addEventListener('click', openCam)