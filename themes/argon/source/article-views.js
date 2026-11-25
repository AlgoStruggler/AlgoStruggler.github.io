(function () {
	let currentCount;

	async function recordArticleView() {
		const count = document.querySelector('#primary [data-article-views]');
		if (count === currentCount) return;
		currentCount = count;
		if (!count) return;

		const permalink = new URL(count.dataset.articleViews);
		if (permalink.origin !== location.origin) return;

		count.textContent = '阅读次数加载中';
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 8000);
		let label = '阅读次数暂不可用';
		try {
			const response = await fetch('https://busuanzi.9420.ltd/api', {
				method: 'POST',
				headers: { 'x-bsz-referer': permalink.href },
				credentials: 'omit',
				referrerPolicy: 'no-referrer',
				signal: controller.signal
			});
			if (response.ok) {
				const result = await response.json();
				const views = result.data?.page_pv;
				if (result.success && Number.isSafeInteger(views) && views >= 0) {
					label = `阅读 ${views.toLocaleString('zh-CN')} 次`;
				}
			}
		} catch {
			// A failed response may still have recorded the view.
		} finally {
			clearTimeout(timeout);
			if (count === currentCount) count.textContent = label;
		}
	}

	$(document).on('pjax:end', '#primary', recordArticleView);
	recordArticleView();
})();
