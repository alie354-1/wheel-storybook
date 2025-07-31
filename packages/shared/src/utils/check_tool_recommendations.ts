import { supabase } from '../lib/supabase';

async function checkToolRecommendations() {
  console.log('=== Checking Tool Recommendations Table ===\n');

  // 1. Check if the table exists and has data
  const { data: recommendations, error: recError } = await supabase
    .from('journey_step_tool_recommendations')
    .select('*')
    .limit(5);

  if (recError) {
    console.error('Error querying journey_step_tool_recommendations:', recError);
    return;
  }

  console.log('Sample records from journey_step_tool_recommendations:');
  console.log(JSON.stringify(recommendations, null, 2));
  console.log(`\nTotal sample records: ${recommendations?.length || 0}`);

  // 2. Check the tools catalog
  const { data: tools, error: toolsError } = await supabase
    .from('journey_tools_catalog')
    .select('*')
    .limit(5);

  if (toolsError) {
    console.error('Error querying journey_tools_catalog:', toolsError);
    return;
  }

  console.log('\n\nSample records from journey_tools_catalog:');
  console.log(JSON.stringify(tools, null, 2));
  console.log(`\nTotal sample tools: ${tools?.length || 0}`);

  // 3. Check if there are any canonical steps to match
  const { data: canonicalSteps, error: stepsError } = await supabase
    .from('journey_canonical_steps')
    .select('id, name')
    .limit(5);

  if (stepsError) {
    console.error('Error querying journey_canonical_steps:', stepsError);
    return;
  }

  console.log('\n\nSample canonical step IDs:');
  console.log(JSON.stringify(canonicalSteps, null, 2));

  // 4. Try to join the data
  const { data: joinedData, error: joinError } = await supabase
    .from('journey_step_tool_recommendations')
    .select(`
      *,
      tool:journey_tools_catalog (*)
    `)
    .limit(5);

  if (joinError) {
    console.error('Error joining tables:', joinError);
    return;
  }

  console.log('\n\nJoined data (recommendations with tools):');
  console.log(JSON.stringify(joinedData, null, 2));

  // 5. Check a specific canonical_step_id if provided
  if (canonicalSteps && canonicalSteps.length > 0) {
    const testStepId = canonicalSteps[0].id;
    console.log(`\n\nChecking recommendations for specific step ID: ${testStepId}`);

    const { data: specificRecs, error: specificError } = await supabase
      .from('journey_step_tool_recommendations')
      .select(`
        *,
        tool:journey_tools_catalog (*)
      `)
      .eq('canonical_step_id', testStepId);

    if (specificError) {
      console.error('Error querying specific step:', specificError);
    } else {
      console.log(`Found ${specificRecs?.length || 0} recommendations for step ${testStepId}`);
      console.log(JSON.stringify(specificRecs, null, 2));
    }
  }
}

// Run the check
checkToolRecommendations().catch(console.error);
