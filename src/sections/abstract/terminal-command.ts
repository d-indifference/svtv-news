import { Command } from 'commander';

export interface TerminalCommand {
	init(program: Command): void;
}
