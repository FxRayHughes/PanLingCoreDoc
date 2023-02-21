import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: '便捷使用',
  //   Svg: require('@site/static/img/undraw_experience_design_re_dmqq.svg').default,
  //   description: (
  //     <>
  //       这用起来和常规的SkillAPI没有什么不同
  //     </>
  //   ),
  // },
  // {
  //   title: '永久免费',
  //   Svg: require('@site/static/img/free.svg').default,
  //   description: (
  //     <>
  //       是的我并不需要FxSkillAPI来进行盈利，当然如果这个插件帮到你了，你也可以给我一些赞助~
  //     </>
  //   ),
  // },
  // {
  //   title: '极快的反馈',
  //   Svg: require('@site/static/img/undraw_contact_us_re_4qqt.svg').default,
  //   description: (
  //     <>
  //       经过半年用户的验证，出现BUG/问题反馈，我都会在24*2h内回复并**解决**，给你一个更好的使用环境
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
