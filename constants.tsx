
import { TimelineEvent, Program, NavItem } from './types';

export const COLORS = {
  primary: '#059669', // Emerald 600
  secondary: '#10b981', // Emerald 500
  accent: '#34d399', // Emerald 400
  bg: '#f9fafb',
  white: '#ffffff',
  text: '#1e293b'
};

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '학교 역사', path: '/history' },
  { label: '교장 선생님', path: '/principal' },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: '2015', title: '바이브코딩 설립', description: '창의 코딩 교육의 첫 걸음, 바이브코딩 교육 센터 개소' },
  { year: '2017', title: '정규 과정 확장', description: '초·중·고 단계별 커리큘럼 도입 및 정규 반 편성' },
  { year: '2019', title: '대외 협력 확대', description: '지역 교육청 및 학교 방과후 프로그램 파트너십 체결' },
  { year: '2021', title: 'PBL 시스템 강화', description: '실전 프로젝트 기반(Project-Based Learning) 학습 체계 완성' },
  { year: '2023', title: '브랜드 다각화', description: 'AI 특화 교육 및 심화 알고리즘 과정 신설, 수강생 만족도 최상' },
  { year: '2026', title: '미래형 코딩 스쿨', description: '국내 최고 수준의 전문 코딩 교육 브랜드로서의 도약' },
];

export const PROGRAMS: Program[] = [
  {
    title: '베이직 코더',
    level: '초등부',
    description: '블록 코딩과 놀이를 통해 컴퓨팅 사고력의 기초를 다집니다.',
    tags: ['스크래치', '엔트리', '창의력']
  },
  {
    title: '주니어 마스터',
    level: '중등부',
    description: 'Python과 하드웨어를 결합하여 논리적 해결 능력을 키웁니다.',
    tags: ['Python', '아두이노', '문제해결']
  },
  {
    title: '테크 이노베이터',
    level: '고등부',
    description: 'C++, 알고리즘 및 AI 실무 프로젝트를 수행합니다.',
    tags: ['C++', 'AI/ML', '알고리즘']
  }
];
