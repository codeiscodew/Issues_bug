const pool = require("./database"); // Import the MySQL connection pool

const resolvers = {
  Query: {
    getIssue: async (_, { id }) => {
      try {
        const [rows] = await pool.query("SELECT * FROM issues WHERE id = ?", [
          id,
        ]);
        return rows[0];
      } catch (error) {
        throw new Error("Error fetching issue: " + error.message);
      }
    },
    getAllIssues: async () => {
      try {
        const [rows] = await pool.query("SELECT * FROM issues");
        return rows;
      } catch (error) {
        throw new Error("Error fetching issues: " + error.message);
      }
    },
  },
  Mutation: {
    addIssue: async (_, args) => {
      try {
        const {
          project,
          team,
          issue_name,
          issue_status,
          issue_desc,
          assignee,
        } = args;
        const [result] = await pool.query(
          "INSERT INTO issues (project, team, issue_name, issue_status, issue_desc, assignee) VALUES (?, ?, ?, ?, ?, ?)",
          [project, team, issue_name, issue_status, issue_desc, assignee]
        );
        return {
          id: result.insertId,
          ...args,
        };
      } catch (error) {
        throw new Error("Error adding issue: " + error.message);
      }
    },
    updateIssue: async (_, args) => {
      try {
        const { id, ...updates } = args;
        await pool.query("UPDATE issues SET ? WHERE id = ?", [updates, id]);
        return { id, ...updates };
      } catch (error) {
        throw new Error("Error updating issue: " + error.message);
      }
    },
    deleteIssue: async (_, { id }) => {
      try {
        const [rows] = await pool.query("DELETE FROM issues WHERE id = ?", [
          id,
        ]);
        return rows[0];
      } catch (error) {
        throw new Error("Error deleting issue: " + error.message);
      }
    },
  },
};

module.exports = resolvers;
