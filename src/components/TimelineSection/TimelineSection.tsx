import styles from './TimelineSection.module.css';
import { Section, Timeline } from '@telegram-apps/telegram-ui';

const TIMELINE_ITEMS = [
  {
    header: 'Ильяз придумал хуйню',
    description: '02.09.2024',
  },
  {
    header: 'Собрали команду',
    description: '02.09.2024',
  },
  {
    header: 'Запускаем токен',
    description: '10.09.2024',
  },
  {
    header: 'Запускаем мини-апп',
    description: '15.09.2024',
  },
  {
    header: 'Бреем хомяков',
    description: 'вечно',
  },
];

export const TimelineSection = () => (
  <Section header="Как заработать на порш">
    <Timeline className={styles.timeline} active={1}>
      {TIMELINE_ITEMS.map((item, index) => (
        <Timeline.Item key={index} header={item.header}>
          {item.description}
        </Timeline.Item>
      ))}
    </Timeline>
  </Section>
);
