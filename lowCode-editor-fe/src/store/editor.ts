import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
export interface EditorProps {
	components: ComponentData[]; // 供中间编辑器渲染的数组
	currentElement: string; //当前剪辑的哪个元素
}

interface ComponentData {
	props: { [key: string]: any };
	id: string; // uuid v4 生成
	name: string; //业务组件库名称
}

export const testComponents: ComponentData[] = [
	{ id: uuidv4(), name: "text", props: { text: "hello1" } },
	{ id: uuidv4(), name: "text", props: { text: "hello22" } },
	{ id: uuidv4(), name: "text", props: { text: "hello333" } },
];

export const useEditorStore = create<EditorProps>((set) => ({
	// 初始状态
	components: testComponents,
	currentElement: "",

	// Action方法
	setCurrentElement: (id: string) => set({ currentElement: id }),

	updateComponentProps: (id: string, newProps: any) =>
		set((state) => ({
			components: state.components.map((comp) =>
				comp.id === id
					? { ...comp, props: { ...comp.props, ...newProps } }
					: comp,
			),
		})),
}));

export default useEditorStore;
