---
title: 디자인 시스템과 UI 라이브러리
date: 2024-02-17
---
## 디자인 시스템과 UI 라이브러리는 다르다?
### 디자인 시스템과 UI 라이브러리 목적
- 디자인 시스템
	- **사용자 인터페이스**를 구축하는데 필요한 **모든 요소**를 정의하는 포괄적인 문서와 가이드라인 집합
		  ( 컴포넌트, 패턴, 디자인 원칙, 사용 가이드라인, 툴, 스타일 가이드 )

- UI 라이브러리
	- 구체적인 코드를 포함하는 **재사용 가능한 UI** 컴포넌트들의 모음

### 디자인 시스템
|  | 항목 |
| ---- | ---- |
| 형태 | 색상, 타이포 그래피, 컴포넌트 ... |
| 기능 | 입력 ( 클릭, 타이핑 ... ), 선택 ( 라디오, 체크박스, 토글 ... ) |
| 접근성 | 컬러 대비, 키보드 네비게이션, aria ( role ... ), focus |

#### 형태
제약과 자유로움 중 적절함을 찾아야 한다.

```js
// 제약적으로 추상화한 컴포넌트
const Component = () => {
	const [value, setValue] = useState('1');
	const radioList = [
		{ label: 'First', value:'1' },
		{ label: 'Second', value:'2' },
		{ label: 'Third', value:'3' },
	]

	return (
		<RadioGroup radioList={radioList} ... />
	)
}
```

```js
// 자유롭게 커스텀이 가능한 컴포넌트
const Component = () => {
	const { getInputProps, getRadioProps } = useRadio();

	return (
		<RadioGroup {...getInputProps()}>
			<Radio {...getRadioProps('react')} />
			<Radio {...getRadioProps('vue')} />
			...
		</RadioGroup>
	)
}
```

> [!INFO]
> 커스텀이 가능하도록 자유롭게 컴포넌트를 구성하고 **제약적으로 다시한번 감싸는 방법**도 있다.
> 이런 경우 두벌의 디자인 시스템이 생성될 수 있기 때문에 주의해야한다.
