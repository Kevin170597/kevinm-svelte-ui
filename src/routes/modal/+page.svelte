<script lang="ts">
	import { Modal, Title, Text, Button } from '$lib';

    let radiusNone: boolean = false;
    let radiusSm: boolean = false;
    let radiusMd: boolean = false;
    let radiusLg: boolean = false;

    let black: boolean = false;
    let white: boolean = false;
    let gray: boolean = false;
    let primary: boolean = false;

    let shadow1: boolean = false;
    let shadow2: boolean = false;
    let shadow3: boolean = false;
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Radius</Title>
    <Button onClick={() => (radiusNone = true)}>Modal Radius none</Button>
	<Modal bind:visible={radiusNone} title="Modal 2">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (radiusNone = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (radiusSm = true)}>Modal Radius sm</Button>
	<Modal bind:visible={radiusSm} title="Modal 2" radius="sm">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (radiusSm = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (radiusMd = true)}>Modal Radius md</Button>
	<Modal bind:visible={radiusMd} title="Modal 2" radius="md">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (radiusMd = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (radiusLg = true)}>Modal Radius lg</Button>
	<Modal bind:visible={radiusLg} title="Modal 2" radius="lg">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (radiusLg = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Title color="white">Color</Title>
    <Button onClick={() => (black = true)}>Modal black</Button>
	<Modal bind:visible={black} title="black" radius="lg" color="black">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (black = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (white = true)}>Modal white</Button>
    <Modal bind:visible={white} title="white" radius="lg" color="white">
		<div class="flex flex-col gap-2 p-3">
			<Text color="gray">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (white = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (gray = true)}>Modal gray</Button>
    <Modal bind:visible={gray} title="gray" radius="lg" color="gray">
		<div class="flex flex-col gap-2 p-3">
			<Text color="white">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (gray = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (primary = true)}>Modal primary</Button>
    <Modal bind:visible={primary} title="primary" radius="lg" color="primary">
		<div class="flex flex-col gap-2 p-3">
			<Text color="white">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (primary = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Title color="white">Shadow</Title>
    <Button onClick={() => (shadow1 = true)}>Modal shadow 1</Button>
    <Modal bind:visible={shadow1} title="shadow1" radius="lg" color="primary" shadow={1}>
		<div class="flex flex-col gap-2 p-3">
			<Text color="white">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (shadow1 = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (shadow2 = true)}>Modal shadow 2</Button>
    <Modal bind:visible={shadow2} title="shadow2" radius="lg" color="primary" shadow={2}>
		<div class="flex flex-col gap-2 p-3">
			<Text color="white">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (shadow2 = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
    <Button onClick={() => (shadow3 = true)}>Modal shadow 3</Button>
    <Modal bind:visible={shadow3} title="shadow3" radius="lg" color="primary" shadow={3}>
		<div class="flex flex-col gap-2 p-3">
			<Text color="white">Delete?</Text>
			<div>
				<Button size="sm" radius="lg">Cancel</Button>
				<Button onClick={() => (shadow3 = false)} size="sm" color="primary" radius="lg">
					Acept
				</Button>
			</div>
		</div>
	</Modal>
</div>
