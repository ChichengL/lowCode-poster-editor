import React from "react";
import TemplateList from "@components/template-list";
import styles from "./index.module.scss";

import GlobalDataStore from "../../store";

const App: React.FC = () => {
	const { templates } = GlobalDataStore();
	return (
		<div className={styles["container"]}>
			<TemplateList data={templates} />
		</div>
	);
};

export default App;
