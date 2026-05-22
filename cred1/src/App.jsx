
import cred from "./assets/cred.mp4"
import cr2 from "./assets/cr2.mp4"

import img1 from "./assets/mobile.png"
import './App.css'


function App() {
  
   
  return (
    <>

     <div class="top">
     <video autoPlay muted loop className="credbg">
      <source src={cred} type="video/mp4" />
     </video>
    <h1>crafted for the <br/>creditworthy</h1> 
    
    <p>CRED is a members-only club that enables the <br/>trustworthy to make financial progress</p>
    
  </div>

  <div class="mid">
    <div class="mid1">
  <h3>NOT EVERYONE MAKES IT IN.</h3>
  <h1>the story of CRED <br/>begins with trust.<br/>we belive<br/> individuals who've <br/>
  proven thier<br/> trustworthiness<br/> deserve better:<br/>better experiences,
  <br/>better rewards,better rules. this is the status<br/>
   quo we're<br/>
    building.make it to<br/>
     the club,and <br/> experience the <br/> ascension yourself.</h1>
  </div>
  <div class="box1">
    <hr></hr>
    <img src={img1}/>
    <h1>all that you deserve.<br/>and some more.</h1>
    <p>if you're a CRED member, you're already a  step ahead.<br/> every experience you unlock  takes you higher up the pedestal.</p>
  </div>
  <div class="box2">
    <hr></hr>
    <h1>do more with<br></br> your credit cards</h1>
    <p>manage your credit cards better and improve your credit score: <br/>
       receive payment reminders, uncover hidden fees, get spending <br/>
        insights, and discover ways to maximize card benefits.
    </p>
  </div>
  <div class="box3">
    <br/>
    <br/>
    <br/>
    
    <hr/>
    <h1>upgrade your life.
      <br/>
      bit by bit.</h1>
  </div>

  <div class="box4">
    <br/>
    <br/>
    <br/>
    <hr/>
    <video autoPlay muted loop className="cr2">
      <source src={cr2} type="video/mp4" />
     </video>
    <h1>feel the odds fall <br/>
     in your favor</h1>
    <p>unlock cashback, exclusive rewards from select brands, and
      <br/> special access to curated products and experiences.</p>


  </div>
  <div class="box5">
    <h3>your data isn't our business. keeping it safe is.</h3>
    <h2>all your personal data and
      <br/> transactions are encrypted and 
      <br/>secured. there's no room for 
      <br/>mistakes because we didn't leave any.</h2>
  </div>
  <div class="box6">

    <hr></hr>
    <p>TRUSTED BY 15M MEMBERS</p>
    <h1>
      the proof <br/>
      writes itself
    </h1>
    <br/>
    <hr/>
  </div>

  <div class="box7">
    <h1>not everyone gets it</h1>
    <p>like all good things in life, earning a CRED 
      <br/>membership is not easy;but the possibility of 
      <br/>
      unlocking a greater future makes the effort <br/>worthwhile.</p>

  </div>
  <div class="FAQS">
    <br></br>
    <br></br>
    <hr></hr>
    <h1>FAQs</h1>
  </div>

  <div class="bottam">
    <br></br>
    <hr></hr>

    <div class="upgrades">
      <h1>UPGRADES</h1>
      <ul>
        <li>CRED money</li>
        <li>CRED mint</li>
        <li>CRED garage</li>
        <li>CRED cash+</li>
      </ul>

    </div>
    <div class="company">
      <h1>COMPANY</h1>
      <ul>
        <li>about CRED</li>
        <li>careers</li>
      </ul>
    </div>
    <div class="resoueces">
      <h1>RESOURCES</h1>
      <ul>
        <li>partner with us</li>
        <li>calculators</li>
         <li>articles</li>
         <li>tech blog</li>
         <li>credscore guide</li>
        <li>credit card</li>
        <li>payment guide</li>
        <li>customer care</li>
        <li>payment guide</li>
        <li>customer care</li>
        <li>Dreampurse</li>
        <li>(HipBar) wallet</li>
        <li>refund form</li>
      </ul>
    </div>

    <div class="payments">
      <h1>PAYMENTS</h1>
      <ul>

        <li>Scan & pay</li>
        <li>Top to pay</li>
        <li>pay anyone</li>
        <li>RuPay cards on</li>
        <li>UPI</li>
      </ul>

    </div>

    <div class="insider">
      <h1>INSIDER PERKS</h1>
      <ul>
        <li>upgrade to UPI</li>
      </ul>
      </div>

      <div class="Design">
        <h1>DESIGN</h1>
        <ul>
          <li>NeoPOP</li>
          <li>manifesto</li>
        </ul>
      </div>

      <div class="policy">
        <h1>POLICY</h1>
        <ul>
          <li>transaction & user verification</li>
          <li>Google API</li>
          <li>disclosure</li>
          <li>UPI FAQ &</li>
          <li>grievances</li>
          <li>returns and refunds</li>
          <li>security</li>
          <li>equal opportunity</li>
          <li>policy</li>
          <li>investor relations</li>
          <li>other disclosure</li>
        </ul>
      </div>
<div class="baner">
  <h3>complete security.no asterisks.</h3>
  <p>CRED encrypts all data and transactions to ensure a <br/> completely secure experience for our members.</p>

</div>

<div class="copyright">
  <br>
  </br>
  <hr></hr>
  <br>
  </br>
  <br></br>
  <h2>copyright <samp>c</samp>2020-26 Dreamplug Technologies Pvt Ltd.</h2>
<h3>privacy policy | terms and conditions</h3>
</div>
</div>

  </div>
      
    </>
  )
}

export default App
