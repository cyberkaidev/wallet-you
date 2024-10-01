import { RuleConfigCondition, RuleConfigSeverity } from "@commitlint/types";

export default {
	parserPreset: "conventional-changelog-conventionalcommits",
	rules: {
		"type-enum": [
			RuleConfigSeverity.Error,
			"always",
			[
				":tada:", // Initial commit
				":bookmark:", // Version tag
				":sparkles:", // New feature
				":bug:", // Bugfix
				":card_index:", // Metadata
				":books:", // Documentation
				":bulb:", // Documenting source code
				":racehorse:", // Performance
				":lipstick:", // Cosmetic
				":rotating_light:", // Tests
				":white_check_mark:", // Adding a test
				":heavy_check_mark:", // Make a test pass
				":zap:", // General update
				":art:", // Improve format/structure
				":hammer:", // Refactor code
				":fire:", // Removing code/files
				":green_heart:", // Continuous Integration
				":lock:", // Security
				":arrow_up:", // Upgrading dependencies
				":arrow_down:", // Downgrading dependencies
				":shirt:", // Lint
				":alien:", // Translation
				":pencil:", // Text
				":ambulance:", // Critical hotfix
				":rocket:", // Deploying stuff
				":apple:", // Fixing on MacOS
				":penguin:", // Fixing on Linux
				":checkered_flag:", // Fixing on Windows
				":construction:", // Work in progress
				":construction_worker:", // Adding CI build system
				":chart_with_upwards_trend:", // Analytics or tracking code
				":heavy_minus_sign:", // Removing a dependency
				":heavy_plus_sign:", // Adding a dependency
				":whale:", // Docker
				":wrench:", // Configuration files
				":package:", // Package.json in JS
				":twisted_rightwards_arrows:", // Merging branches
				":hankey:", // Bad code / need improv.
				":rewind:", // Reverting changes
				":boom:", // Breaking changes
				":ok_hand:", // Code review changes
				":wheelchair:", // Accessibility
				":truck:", // Move/rename repository
			],
		] as [RuleConfigSeverity, RuleConfigCondition, string[]],
	},
};
