import BaseHeader from "./base-header";
import BaseMain from "./base-main";
import BaseFooter from "./base-footer";

function BaseLayout({ children }) {
	return (
		<>
			<BaseHeader />
			<BaseMain>{children}</BaseMain>
			<BaseFooter />
		</>
	);
}

export default BaseLayout;
