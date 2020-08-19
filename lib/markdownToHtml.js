import remark from 'remark';
import images from 'remark-images';
import html from 'remark-html';

export async function markdownToHtml(markdown) {
	const result = await remark().use(images).use(html).process(markdown);
	return result.toString();
}
