async function alterUser(event) {

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const payload = {
        newUsername,
        newPassword
    };

    try {
        const response = await fetch('/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload), 
        });

        if (response.ok) {
            alert('Update successful');
        } else {
            alert('Update failed');
        }
    } catch (error) {
        console.error('Error updating user:', error);
        alert('Error updating user');
    }
}
