function changeImage() {
    const image =document.querySelector('#Image');
    const newImage = prompt("Enter the new image URL:");
    const border=prompt("Enter the border size in pixels:");
    const width=prompt("Enter the width size in pixels:");
    const height=prompt("Enter the height size in pixels:");
    const borderRadius=prompt("Enter the border radius in pixels:");
    const backgroundColor=prompt("Enter the background color:");


    image.setAttribute('src', newImage);
    image.style.border=`${border}px solid black`;
    image.style.width=`${width}px`;
    image.style.height=`${height}px`;
    image.style.borderRadius=`${borderRadius}px`;
    image.style.backgroundColor=backgroundColor;
}