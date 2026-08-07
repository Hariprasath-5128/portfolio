import os

file_path = r'c:\Projects\Portfolio\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Normalize Nav Links
content = content.replace('>Genesis <svg', '>About <svg')
content = content.replace('>Glance <svg', '>Overview <svg')
content = content.replace('>Arsenal <svg', '>Skills <svg')
content = content.replace('>Research <svg', '>Publications <svg')
content = content.replace('>Innovations <svg', '>Projects <svg')

# Normalize Section Headlines
content = content.replace('<h2 class="section-headline" data-animate="fade-up">My Genesis</h2>', '<h2 class="section-headline" data-animate="fade-up">About Me</h2>')
content = content.replace('<h2 class="section-headline" data-animate="fade-up">Arsenal of Skills</h2>', '<h2 class="section-headline" data-animate="fade-up">Skills</h2>')
content = content.replace('<h2 class="section-headline" data-animate="fade-up">Published Research</h2>', '<h2 class="section-headline" data-animate="fade-up">Publications</h2>')
content = content.replace('<h2 class="section-headline" data-animate="fade-up">Hall of Innovations</h2>', '<h2 class="section-headline" data-animate="fade-up">Projects</h2>')
content = content.replace('<h2 class="section-headline" data-animate="fade-up">Work Experience</h2>', '<h2 class="section-headline" data-animate="fade-up">Experience</h2>')
content = content.replace('<h2 class="section-headline" data-animate="fade-up">Milestones &amp; Certifications</h2>', '<h2 class="section-headline" data-animate="fade-up">Certifications</h2>')

# Remove FAQ section and normalize Contact
contact_faq_old = """  <!-- ==================== CONTACT / FAQ ==================== -->
  <section id="contact" class="section-block">
    <div class="section-container">
      <div class="section-eyebrow-center" data-animate="fade-up"><span class="eyebrow-dot"></span> FAQ</div>
      <h2 class="section-headline" data-animate="fade-up">Curious Minds Ask</h2>
      <div class="faq-layout" data-animate="fade-up">
        <div class="faq-sidebar">
          <button class="faq-category active" id="faq-cat-general" data-category="general">General</button>
          <button class="faq-category" id="faq-cat-skills" data-category="skills">Skills</button>
          <button class="faq-category" id="faq-cat-collab" data-category="collab">Collaboration</button>
        </div>
        <div class="faq-accordion" id="faqAccordion">
          <div class="faq-group" data-category="general">
            <span class="faq-group-label">GENERAL</span>
            <div class="faq-item" id="faq-1"><button class="faq-q" aria-expanded="false" aria-controls="faq-1-body">Who is Hariprasath M?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-1-body" hidden>A B.Tech CSE undergraduate at VIT Chennai with a CGPA of 9.72, simultaneously pursuing a B.S. in Data Science from IIT Madras. I specialize in AI engineering — LLMs, computer vision, and cloud-native systems.</div></div>
            <div class="faq-item" id="faq-2"><button class="faq-q" aria-expanded="false" aria-controls="faq-2-body">What are your academic achievements?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-2-body" hidden>9.72 CGPA at VIT Chennai, a published paper in Frontiers in AI, three industry certifications (Oracle, Google, GCP), and 6+ AI/ML projects spanning LLMs, vision, and cloud infrastructure.</div></div>
            <div class="faq-item" id="faq-3"><button class="faq-q" aria-expanded="false" aria-controls="faq-3-body">Where can I see your published research?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-3-body" hidden>My paper on Medical Query Understanding &amp; Recommendation System is published in Frontiers in Artificial Intelligence. You can access it via the Publications section above.</div></div>
          </div>
          <div class="faq-group" data-category="skills" hidden>
            <span class="faq-group-label">SKILLS</span>
            <div class="faq-item" id="faq-4"><button class="faq-q" aria-expanded="false" aria-controls="faq-4-body">What AI/ML frameworks do you use?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-4-body" hidden>Primarily PyTorch, TensorFlow, and HuggingFace Transformers. I also use Scikit-learn, LangChain, FastAPI, and various cloud SDKs for GCP and AWS.</div></div>
            <div class="faq-item" id="faq-5"><button class="faq-q" aria-expanded="false" aria-controls="faq-5-body">Do you have cloud/DevOps experience?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-5-body" hidden>Yes — I hold a GCP Associate Cloud Engineer certification and have hands-on experience with Kubernetes, Docker, and Minikube through my AI Self-Healing Autoscaler project.</div></div>
          </div>
          <div class="faq-group" data-category="collab" hidden>
            <span class="faq-group-label">COLLABORATION</span>
            <div class="faq-item" id="faq-6"><button class="faq-q" aria-expanded="false" aria-controls="faq-6-body">Are you available for internships?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-6-body" hidden>Absolutely! I'm actively looking for internship opportunities in AI/ML engineering, LLM applications, and cloud-native AI systems.</div></div>
            <div class="faq-item" id="faq-7"><button class="faq-q" aria-expanded="false" aria-controls="faq-7-body">How can I contact you?<svg class="faq-chevron" width="16" height="16" viewBox="0 0 16 16" fill="#3fb950"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"/></svg></button><div class="faq-a" id="faq-7-body" hidden>Email me at hariprasath1528@gmail.com, connect on LinkedIn, or use the contact form below. I typically respond within 24 hours.</div></div>
          </div>
        </div>
      </div>
      <div class="contact-form-section" data-animate="fade-up">
        <h3 class="contact-form-heading">Send a message</h3>"""

contact_faq_new = """  <!-- ==================== CONTACT ==================== -->
  <section id="contact" class="section-block">
    <div class="section-container">
      <div class="section-eyebrow-center" data-animate="fade-up"><span class="eyebrow-dot"></span> LET'S CONNECT</div>
      <h2 class="section-headline" data-animate="fade-up" style="margin-bottom: 40px; text-align: center;">Contact Me</h2>
      <div class="contact-form-section" data-animate="fade-up">"""

content = content.replace(contact_faq_old, contact_faq_new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
