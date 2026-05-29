import random
import os

FEATURES = [
    "Serverless architecture ⚡",
    "Pure valid JSON-LD output 📜",
    "AI Graph Mode (auto-linked entities) 🧠",
    "Instant real-time validation ✅",
    "One-click copy-to-clipboard functionality 📋"
]

HOOKS = [
    "Are you still writing Schema markup by hand? Stop the madness! 🛑",
    "Boost your SEO in seconds with Schema Studio! 🚀",
    "AI bots love clean JSON-LD. Give them exactly what they want! 🤖",
    "Stop dealing with isolated Schema errors in Google Search Console. 📈",
    "Level up your Programmatic SEO game today! 🎯"
]

def generate_post():
    hook = random.choice(HOOKS)
    feats = random.sample(FEATURES, 3)
    
    body = "Discover how Schema Studio helps you dominate SERPs with:\n"
    for feat in feats:
        body += f"🔹 {feat}\n"
        
    cta = "Try it now for FREE! 🔗 https://schemastudio.app"
    tags = "#SEO #JSONLD #SchemaMarkup #MicroSaaS #WebDev #Marketing"
    
    return f"{hook}\n\n{body}\n{cta}\n\n{tags}"

def main():
    # Generate 5 random marketing posts
    posts = [generate_post() for _ in range(5)]
    
    # Define output path
    out_path = os.path.join(os.path.dirname(__file__), "draft_posts.txt")
    
    # Save to file
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("=== SCHEMA STUDIO MARKETING DRAFTS ===\n\n")
        for i, post in enumerate(posts):
            f.write(f"--- POST {i+1} ---\n")
            f.write(f"{post}\n\n")
            f.write("-" * 40 + "\n\n")
            
    print(f"✅ Generated 5 draft posts and saved successfully to:\n{out_path}")

if __name__ == "__main__":
    main()