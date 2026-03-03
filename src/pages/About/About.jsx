import { FiTarget, FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './About.module.css';

const values = [
  {
    icon: <FiTarget />,
    title: 'Mission-Driven',
    description:
      'We believe quality education should be accessible to everyone, regardless of background or location.',
  },
  {
    icon: <FiHeart />,
    title: 'Student-First',
    description:
      'Every decision we make starts with a simple question: will this make our students more successful?',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Industry-Relevant',
    description:
      'Our curriculum is continuously updated with input from hiring managers and industry leaders.',
  },
  {
    icon: <FiUsers />,
    title: 'Community-Powered',
    description:
      'Learning is better together. Our community of learners, mentors, and alumni supports every student.',
  },
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="About Us"
            title="Empowering Learners Since 2020"
            subtitle="FreeGenero was founded with a simple mission: make world-class education accessible to everyone, everywhere."
          />
        </div>
      </section>

      <section className="section about-story">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>ფიქრები ფრიჯენეროს შექმნამდე</h2>
              <p>
              ადამიანები განსხვავებულები ვართ და ყველას ჩვენებურად გვესმის ცხოვრების არსი, მიზანი... თუმცა არის ერთი რამ, რაც გვაერთიანებს  - ყველა ვცდილობთ რომ ცხოვრების იმ ხანმოკლე დროში, რაც რამდენ წელს გაგრძელდება წინასწარ არავინ იცის - ბედნიერება ვიპოვოთ. ბედნიერებაც იმდენნაირად გვესმის რამდენი ადამიანიც არსებობს დედამიწაზე. თუმცა, კარგად თუ დავუკვირდებით, სხვადასხვა მხოლოდ ბედნიერებისკენ მიმავალი გზაა, ხოლო ბედნიერება ერთ ყველაზე მთავარს ეფუძნება და ეს მთავარი ყველასათვის ერთია - თავისუფლება. 
              </p>
              <p>
              თავისუფლების გარეშე ბედნიერებას არც აქამდე უარსებია და არც არასოდეს იარსებებს.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop"
                alt="Team collaborating in a modern office"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.story}>
          <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop"
                alt="Team collaborating in a modern office"
              />
            </div>
            <div className={styles.storyContent}>
              <p>
              ერთ-ერთი მთავარი გადაწყვეტილება, რაც ჩვენს ყოველდღიურ ბედნიერებას დიდწილად განაპირობებს, ჩვენი საქმიანობაა. ჩვენი საქმიანობა ხომ ის მისიაა, რისთვისაც ცხოვრების უმეტეს ნაწილს ვიმეტებთ. წარმოიდგინეთ რომ ეს მისია სხვისია და არა თქვენი. ალბათ სწორედ ამ დროს ჩნდება სიტყვა "მეზარება", ამ დროს გვინდა რომ კვირა დღე გაგრძელდეს და ორშაბათი დიდხანს არ დადგეს, ამ დროს ვფიქრობთ რომ "ცხოვრება წვალებაა"...
              </p>
              <p>
              ხოლო მაშინ როცა იმ საქმეს ვაკეთებთ რაც ღამე არ გვასვენებს, რაც ჟრუანტელს გვგვრის, რასაც შაბათ-კვირას სამსახურის გარეშეც გავაკეთებდით - თითოეული წუთი გვაბედნიერებს. ვაკეთებთ იმას რაც გვიყვარს. ვართ თავისუფლები. ვართ ბედნიერები. ასეთი ადამიანები არამარტო საკუთარ, არამედ სხვა უამრავი ადამიანების ცხოვრებას ცვლიან უკეთესობისკენ!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="These principles guide everything we do at FreeGenero."
          />
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.numbers}>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>10,000+</span>
              <span className={styles.numberLabel}>Students Enrolled</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>50+</span>
              <span className={styles.numberLabel}>Expert-Led Courses</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>95%</span>
              <span className={styles.numberLabel}>Completion Rate</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>30+</span>
              <span className={styles.numberLabel}>Countries Served</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
