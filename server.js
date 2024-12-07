const express = require('express');
const cors = require('cors');
const { getNews } = require('./utils/getNews');
const { processTitleMood, changeMood } = require('./utils/processNewsLLM');
const { API_KEY, GEMINI_KEY, PORT, LOCAL_STORAGE_KEY, DEFAULT_IMG } = require('./utils/constants');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Hello from Harmony Headlines Backend!");
  });

app.get('/news', async (req, res) => {
  try {
    const news = await getNews(); 
    res.json(news); 
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.post('/analyze-mood', async (req, res) => {
  try {
    const news = req.body; 
    const moods = await processTitleMood(news.titles);
    res.json({moods}); 
  } catch (error) {
    console.error('Error analyzing mood:', error);
    res.status(500).json({ error: 'Failed to analyze mood' });
  }
});

app.post('/update-mood', async (req, res) => {
  try {
    const data = req.body; 
    const updated = await changeMood(data);
    res.json(updated); 
  } catch (error) {
    console.error('Error updating mood:', error);
    res.status(500).json({ error: 'Failed to update mood' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
