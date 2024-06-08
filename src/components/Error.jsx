import React from "react";

const Error = () => {
    return (
        <div style={styles.container}>
            <h4 style={styles.errorMessage}>Estos no son los droides que estás buscando.</h4>
            <img
                alt="error"
                src="https://www.liveabout.com/thmb/ZUCXXttMmwNW3MzQKcnz_xII5YY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg"
                style={styles.errorImage}
            />
        </div>
    )
}

export default Error;

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    errorMessage: {
        color: '#ff0000',
        fontWeight: 'bold',
    },
    errorImage: {
        maxWidth: '100%',
        maxHeight: '300px',
        marginTop: '20px',
    }
};