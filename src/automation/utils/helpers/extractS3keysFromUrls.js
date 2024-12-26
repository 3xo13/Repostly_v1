
function extractS3KeysFromUrls(s3Urls) {
    if (!Array.isArray(s3Urls) || s3Urls.length === 0) {
        throw new Error("Input must be a non-empty array of S3 URLs");
    }
    return s3Urls
        .map(url => {
            try {
                const urlObject = new URL(url);
                const key = urlObject
                    .pathname
                    .slice(1); // Removing the leading slash
                return key;
            } catch (error) {
                console.error("Invalid URL:", url);
                return null;
            }
        })
        .filter(key => key !== null); // Filtering out any null values due to invalid URLs
			}
export default extractS3KeysFromUrls;
