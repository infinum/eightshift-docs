import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as InfinumFooter } from '@infinum/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<InfinumFooter footer={footer} />
	);
}

export default React.memo(Footer);
