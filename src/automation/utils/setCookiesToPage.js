export const setCookiesToPage = async (cookies, page) => {
    try {
        const filteredCookies = cookies.map(cookie => {
            const {
                expires,
                ...data
            } = cookie.data; // Extract and ignore the 'expires' field
            const newExpires = Date.now() + 7 * 24 * 60 * 60 * 1000; // Set new expiration date to one week from now
            return {
                ...data,
                expires: newExpires
            };
        });
        for (const cookie of filteredCookies) {
            await page.setCookie(cookie);
        }
        console.log('Cookies set successfully!');
    } catch (error) {
        console.error('Error setting cookies:', error);
    }
};