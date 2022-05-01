import { gql } from "@apollo/client";

export const LOAD_LEADERBOARD = gql`
query getLeaderBoard {
    Leaders {
      Name
      Score
    }
  }
  
  `
  