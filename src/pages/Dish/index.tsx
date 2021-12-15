import { Chip, Container, Stack, Typography } from "@mui/material";
import React from "react";

import Header from "~/components/Header";

export default function DishPage(): JSX.Element | null {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack spacing={2} p={2}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Test
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated on <time>7 January, 2022</time>
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          <Chip label="Vegan 🌿" sx={{ marginBottom: 1, marginRight: 1 }} />
          <Chip label="Green" sx={{ marginBottom: 1, marginRight: 1 }} />
          <Chip label="Healthy" sx={{ marginBottom: 1, marginRight: 1 }} />
          <Chip label="Quick Bites" sx={{ marginBottom: 1, marginRight: 1 }} />
        </Stack>
        <img src="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          commodo arcu ut ultricies mattis. Etiam porta tempus vehicula.
          Curabitur sem odio, volutpat sed venenatis vel, pharetra eget ligula.
          Donec interdum ligula tortor, at volutpat neque pharetra at. Proin
          euismod eget augue at volutpat. Vivamus finibus leo in viverra
          pharetra. Aenean vel convallis neque, et auctor quam. Nam viverra erat
          felis, ac suscipit turpis laoreet nec. Curabitur mi leo, fringilla nec
          imperdiet nec, imperdiet sit amet ipsum. Fusce vitae enim blandit,
          ornare est in, sagittis purus. Pellentesque sed nunc at erat laoreet
          iaculis quis at nisi.
        </Typography>
        <Typography variant="body1">
          Mauris elementum rhoncus ligula, nec dignissim massa aliquet et. Sed
          consequat ante ante, vitae semper tellus consequat eu. Aliquam erat
          volutpat. Quisque in risus nec enim vulputate malesuada. Sed elementum
          aliquam molestie. Etiam at sapien blandit magna ultricies sodales. In
          leo urna, mattis et eleifend eu, venenatis quis arcu. Duis mauris mi,
          interdum et mauris eu, dapibus gravida est. Mauris aliquam semper
          auctor.
        </Typography>
        <Typography variant="body1">
          Morbi sollicitudin, velit sed vestibulum vulputate, arcu elit
          malesuada felis, fringilla cursus lacus odio a turpis. Aliquam
          tincidunt risus sed mi laoreet blandit. Duis imperdiet diam ac
          consectetur egestas. Mauris sollicitudin magna in nunc posuere
          pretium. Maecenas nulla nisi, suscipit in leo malesuada, maximus
          varius purus. Sed sit amet quam arcu. Pellentesque semper mi eu orci
          mattis, in luctus arcu lacinia. Nunc pretium, dui vitae porttitor
          volutpat, augue arcu tincidunt magna, lobortis ultrices magna augue eu
          velit. Maecenas eget pretium sapien. Vivamus ac pharetra sem, et
          auctor nisl. Aliquam at elit vestibulum, maximus velit non, vestibulum
          tellus. Nullam vel mollis quam. Vestibulum vel libero eu nunc molestie
          malesuada eu ac diam.
        </Typography>
        <Typography variant="body1">
          Vestibulum nisl diam, commodo non varius vitae, blandit ac orci.
          Quisque porttitor tincidunt mattis. Donec mattis dui risus, nec
          rhoncus libero vehicula quis. Nulla eget interdum lorem. Nullam at
          ultricies lorem. Nunc turpis lacus, eleifend nec felis sit amet,
          hendrerit aliquam purus. Aenean eget massa at diam convallis
          fringilla. Donec id risus pulvinar, dictum enim in, ultricies massa.
          Quisque eu libero volutpat, faucibus ante ullamcorper, molestie arcu.
          Sed lobortis massa tincidunt, efficitur turpis quis, facilisis est. Ut
          egestas neque ante, sit amet dapibus est fermentum eget. Phasellus
          nunc sapien, pharetra nec sem eu, condimentum lacinia quam. Integer
          vel cursus tellus, in consectetur lectus. Etiam placerat sollicitudin
          nunc.
        </Typography>
        <Typography variant="body1">
          Praesent ac libero justo. Integer eget sodales orci. Donec at faucibus
          nisi, vitae pharetra nulla. Nunc lorem nunc, pharetra at mollis sit
          amet, aliquet ut nunc. Curabitur auctor, ipsum vitae luctus dapibus,
          lectus massa aliquet massa, sit amet ullamcorper ex ex vitae ante. In
          massa ipsum, sagittis vitae elit id, sagittis accumsan ante.
          Vestibulum sed sagittis nunc. Curabitur in ultricies velit, aliquam
          pellentesque ante. Donec sapien sapien, elementum eget velit sit amet,
          sollicitudin suscipit sem.
        </Typography>
      </Stack>
    </Container>
  );
}
