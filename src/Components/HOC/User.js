import React from 'react';

function User({ render }) {
    return (
        <div>
            User - {render(false)}
        </div>
    );
}

export default User;