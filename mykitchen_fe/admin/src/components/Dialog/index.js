import Swal from 'sweetalert2';

export const successDialog = () => {
    Swal.fire({
        icon: 'success',
        title: 'LƯU THÀNH CÔNG!',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
            title: 'fs-5 text-success'
        }
    })
}