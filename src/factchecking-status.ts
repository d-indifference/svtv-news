const request = require('request');
const cheerio = require('cheerio');

export const factcheckingStatus = (link: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		request(link, (error: any, response: any, body: any) => {
			if (!error) {
				const $ = cheerio.load(body);

				resolve(
					$('.post-info-factchecking__status img')
						.attr('alt')
						.toString()
				);
			} else {
				reject(error);
			}
		});
	});
};
