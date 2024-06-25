import React from 'react'
import Styles from "./postcontent.module.css";

const PostContent = () => {
  return (
    <section className={Styles.postContent}>
        <div className={Styles.post}>
            <div className={Styles.post1}>
                <div className={Styles.img}>
                    <img src="/images/post1.png" alt="post1" />
                </div>
                <div className={Styles.post1Content}>
                    <h1>Article</h1>
                    <div className={Styles.post1subheading}>
                        <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                        <img src="/images/tripledotslogo.png" alt="" />
                    </div>
                    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className={Styles.post1footer}>
                        <div className={Styles.post1footerimg1}>
                            <img src="/images/photo1.png" alt="photo1" />
                            <h2>Sarthak Kamra</h2>
                        </div>
                        <div className={Styles.post1footerimg2}>
                            <img src="/images/views1.png" alt="views1" />
                            <img src="/images/share1.png" alt="share1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.post2}>
                <div className={Styles.img}>
                    <img src="/images/post2.png" alt="post2" />
                </div>
                <div className={Styles.post2Content}>
                    <h1>Education</h1>
                    <div className={Styles.post2subheading}>
                        <h2>Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
                        <img src="/images/tripledotslogo.png" alt="tripledotslogo" />
                    </div>
                    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className={Styles.post2footer}>
                        <div className={Styles.post2footerimg1}>
                            <img src="/images/photo2.png" alt="photo2" />
                            <h2>Sara West</h2>
                        </div>
                        <div className={Styles.post2footerimg2}>
                            <img src="/images/views1.png" alt="views2" />
                            <img src="/images/share1.png" alt="share2" />
                        </div>
                    </div>
                </div>
            </div>
            {/* sfrdgtfhyjgkuilkjhfgf */}
            <div className={Styles.post3}>
                <div className={Styles.img}>
                    <img src="/images/post3.png" alt="post3" />
                </div>
                <div className={Styles.post3Content}>
                    <h1>Meetup</h1>
                    <div className={Styles.post3subheading}>
                        <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
                        <img src="/images/tripledotslogo.png" alt="tripledotslogo" />
                    </div>
                    <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className={Styles.post3footer}>
                        <div className={Styles.post3footerimg1}>
                            <img src="/images/photo3.png" alt="photo3" />
                            <h2>Ronal Jones</h2>
                        </div>
                        <div className={Styles.post3footerimg2}>
                            <img src="/images/views1.png" alt="views3" />
                            <img src="/images/share1.png" alt="share3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.locationAdd}>
            <div className={Styles.setLoc}>
                <p><img src="/images/navlogo.png" alt="navlogo" />Noida, India</p>
                <img src="/images/editlogo.png" alt="editlogo" />
            </div>
            <hr />
            <div className={Styles.locDesc}>
                <img src="/images/errorlogo.png" alt="editlogo" />
                <p>Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </div>
    </section>
  )
}

export default PostContent;