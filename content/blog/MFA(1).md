---
title: 1. 마이크로 프론트엔드
date: 2024-01-26
---
## 웹 개발 발전 과정
- Monolith ( 모놀리스 )
	- Frontend 와 Backend, Database에 이르기까지 하나의 팀에서 하나의 프로그램을 함께 만들고, 수정하고 배포
	- HTML을 수정해도 적용하려면 전체 프로그램 배포
	- API를 수정해도 적용하려면 전체 프로그램 배포
- Frontend & Backend
	- 더 많은 사람들이 많은 일을 동시에 할 수 있도록 개발 효율성을 향상시키니 위해서 팀을 분리
	- API를 기반으로 소통한다.
- Frontend & MSA
	- Aggregation Layer 추가 ( BFF, GraphQL )
	- 백엔드 API 들과 프론트엔드 사이의 비효율성을 개선하기 위해 BFF와 GraphQL이 유행
- Micro Frontends
	- 독립적으로 제공 가능한 프론트엔드 애플리케이션이 더 큰 전체로 구성되는 아키텍쳐 스타일
	- 2016년 11월호 Thoughtworks technologyradar 에서는 마이크로 프론트엔드 조직이 Assess 해야 할 기술로 선정
- End-to-End Teams & Micro Frontend
	- 백엔드의 MSA를 프론트엔드에도 적용하기 위해 적용

---
## Micro Frontend의 등장
### 기존 Architecture
- 별도의 프론트엔드 팀이 하나의 커다란 모놀리스 시스템을 개발 운영
- 별도의 프론트엔드 팀은 아니지만 모놀리스로 되어 있는 경우

### Monolithic Frontend와 Micro Frontends 비교
| 구분 | Monolithic Frontend | Micro Frontend |
| ---- | ---- | ---- |
| 초기 개발 속도 | 빠르다 | 느리다 |
| 빌드 / 배포 설정 | 단순 | 복잡 |
| 개발 환경 설정 | 간단 | 복잡 |
| 커뮤니케이션 비용 | 시스템이 커질수록 커진다 | 작다 |
| 배포 시간 | 느리다 | 빠르다 |
| 장애 파급 범위 | 크다 | 작다 |
| 자율성 | 낮다 | 높다 |
## 언제 Micro Frontend 도입을 검토해야 할까?
- 규모가 크다
	- 코드의 양이 많아서 크다 ( 10만줄 이상의 경우 )
- 팀원이 많으면 크다
	- 팀원이 5인 이상이다
- 제공하는 기능이 많아서 크다
	- 혹은 서비스의 페이지가 100페이지 이상
	- 서비스의 기능이 50개 이상

### 규모가 큰 모놀리스 프론트엔드 시스템에서 나타나는 전조 증상
- 코드를 수정한 후, 엉뚱한 곳에서 버그가 발생한다.
- 새로운 기능을 위해 기존 코드를 활용하기가 무섭다.
- 간단한 수정 사항을 적용하기 위해 통합, 테슽, 빌드 및 배포 시간이 점점 길어진다.
- 작업을 위한 커뮤니케이션이 점점 늘어난다.
- 동일한 기능을 제공하기 위해 여기 저기서 각각 개발하는 일이 늘어난다.

### 적절한 규모의 팀
- 한 팀이 원할하게 의사소통을 하면서, 해당 서비스의 모든 기능을 이해할 수 있는 수준이라면 적절한 규모의 팀
- 적절한 규모의 팀은 앞서 다룬 문제들이 발생해도 Micro Frontend 도입 없이 적절히 해소할 수 있다.


---
## Micro Frontends 도입의 장단점
### 장점
- 덜 복잡하고, 적은 양의 코드를 관리하여 코드의 품질을 높힐 수 있다.
- 배포의 범위가 줄어들어 빌드 및 배포 시간이 줄고 위험도가 줄어든다.
- 단일 장애 지점 ( Single Point of Failure )을 피할 수 있다.
- 점진적으로 업그레이드 하기에 용이하다.
- 요구사항에 맞춰 애플리케이션을 자유롭게 조립하여 제공할 수 있다.
- 독립적으로 개발 및 배포할 수 있기 때문에 오너십을 가진 팀이 자유롭게 스케줄을 조정할 수 있다.
- 팀이 주도적으로 자유롭게 기술 스택을 선택할 수 있다.
- 서로 다른 팀이 독립적으로 작업을 할 수 있기 때문에 개발 주기가 더 빨라질 수 있다.
### 단점
- 중복 코드가 발생할 수 있다.
- 전체적인 리소스의 크기가 커져 성능 저하에 주의가 필요하다.
- 초기 구축 비용이 발생한다.
- 다양한 마이크로 프론트엔드 간의 통합과 통신에서 추가적인 복잡성이 발생할 수 있다.
- 빌드 타임에서는 문제가 발생하지 않지만, 런타임에 동적으로 통합하는 과정에서 문제가 발생할 수 있다.
- 각각 자율적으로 발전하는 마이크로 프론트엔드 간의 일관적인 UX 제공을 위한 장치가 필요하다.
- 마이크로 프론트엔드 마다 기술적인 격차가 벌어질 가능성이 있다.