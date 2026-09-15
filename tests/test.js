const fs = require("fs");

function check(condition, message) {
    if (!condition) {
        console.error("❌ FAIL:", message);
        process.exit(1);
    }

    console.log("✅ PASS:", message);
}

console.log("Running To-Do App tests...\n");

// Test 1
check(
    fs.existsSync("index.html"),
    "index.html exists"
);

// Test 2
check(
    fs.existsSync("style.css"),
    "style.css exists"
);

// Test 3
check(
    fs.existsSync("script.js"),
    "script.js exists"
);

// Read HTML
const html = fs.readFileSync("index.html", "utf8");

// Test 4
check(
    html.includes("<title>"),
    "HTML contains a title"
);

// Test 5
check(
    html.includes('href="style.css"'),
    "HTML loads style.css"
);

// Test 6
check(
    html.includes('src="script.js"'),
    "HTML loads script.js"
);

console.log("\n All tests passed!");