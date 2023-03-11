import Swal from 'sweetalert2';

export const successDialog = () => {
    Swal.fire({
        icon: 'success',
        title: 'Thêm thành công!',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
            title: 'fs-5 text-success'
        }
    })
}

export const failDialog = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Số lượng đã đạt tối đa!',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
            title: 'fs-5 text-danger'
        }
    })
}